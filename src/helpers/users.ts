import { IUser } from '@uspacy/sdk/lib/models/user';

import { IUserSettings } from '../models/userSettings';

export const getFormattedUserName = (user: IUser, userSettings: IUserSettings): string => {
	const nameFormat = userSettings?.nameFormat || 'first-last';
	switch (nameFormat) {
		case 'first-last':
			return user?.firstName || user?.lastName ? `${user?.firstName || ''} ${user?.lastName || ''}` : 'User';
		case 'last-first':
			return user?.firstName || user?.lastName ? `${user?.lastName || ''} ${user?.firstName || ''}` : 'User';
		case 'first-middle-last':
			return user?.firstName || user?.lastName || user?.patronymic
				? `${user?.firstName || ''} ${user?.patronymic || ''} ${user?.lastName || ''}`
				: 'User';
		case 'last-first-middle':
			return user?.firstName || user?.lastName || user?.patronymic
				? `${user?.lastName || ''} ${user?.firstName || ''} ${user?.patronymic || ''}`
				: 'User';
		default:
			return user?.firstName || user?.lastName ? `${user?.firstName || ''} ${user?.lastName || ''}` : 'User';
	}
};

export const usersSortedBirthdays = (users: IUser[]) => {
	const usersWithBirthday = users.filter((el) => el?.birthday);

	const sortedUsers = usersWithBirthday
		.filter((user) => user.active)
		.sort((a, b) => {
			const aMonth = new Date(+a.birthday * 1000).getMonth();
			const bMonth = new Date(+b.birthday * 1000).getMonth();
			const aDay = new Date(+a.birthday * 1000).getDate();
			const bDay = new Date(+b.birthday * 1000).getDate();

			if (aMonth === bMonth) {
				return aDay - bDay;
			}

			return aMonth - bMonth;
		});

	const filteredUsers = sortedUsers.filter((user) => {
		const userBirhdayMonth = new Date(user.birthday * 1000).getMonth();
		const userBirhdayDate = new Date(user.birthday * 1000).getDate();

		if (userBirhdayMonth >= new Date().getMonth()) {
			if (userBirhdayMonth === new Date().getMonth()) {
				return userBirhdayDate >= new Date().getDate();
			} else {
				return user;
			}
		}
	});

	const todayBirthdayUsersArray = filteredUsers.filter((user) => {
		const currentMonth = new Date().getMonth();
		const currentDate = new Date().getDate();

		if (new Date(user.birthday * 1000).getMonth() === currentMonth) {
			return new Date(user.birthday * 1000).getDate() === currentDate;
		}
	});

	const otherDays = filteredUsers.filter((user) => {
		const currentDate = new Date().getDate();

		return new Date(user.birthday * 1000).getDate() !== currentDate;
	});

	const usersArray = () => {
		if (todayBirthdayUsersArray.length <= 2) {
			return [...todayBirthdayUsersArray, ...otherDays.slice(0, 3 - todayBirthdayUsersArray.length)];
		}

		if (todayBirthdayUsersArray.length >= 3) {
			return todayBirthdayUsersArray;
		}

		return filteredUsers.slice(0, 3);
	};

	return usersArray();
};
