// React
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import EmailIcon from '@mui/icons-material/Email';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import TaskIcon from '@mui/icons-material/Task';
import VideocamIcon from '@mui/icons-material/Videocam';
import FlagIcon from '@mui/icons-material/Flag';
// MUI Components and Icons
import { Box, SvgIcon, SvgIconProps } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
// Third Party
import Uspacy from '@uspacy/sdk';
import React, { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ReactComponent as DoubleArrowUpIcon } from '../../static/images/double-arrow-up.svg';
import { ReactComponent as ArrowUpIcon } from '../../static/images/arrow-up.svg';
import { ReactComponent as EqualIcon } from '../../static/images/equal.svg';
import { ReactComponent as DoubleArrowDownIcon } from '../../static/images/double-arrow-down.svg';
import { ReactComponent as ArrowDownIcon } from '../../static/images/arrow-down.svg';

// Local
import { Activity, ActivityPriority, ActivityStatus, ActivityType } from './types.d';

const Container = styled('div')({
	width: '100%',
	maxWidth: '336px',
	backgroundColor: '#F9FAFC',
	borderRadius: '12px',
	padding: '24px',
});

const Header = styled('div')({
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	marginBottom: '16px',
});

const Title = styled('h2')({
	fontSize: '24px',
	fontWeight: 500,
	color: '#000',
	margin: 0,
});

const NextEventContainer = styled('div')({
	display: 'flex',
	gap: '8px',
	alignItems: 'center',
	marginBottom: '16px',
});

const NextEventText = styled('span')({
	color: '#666',
	fontSize: '14px',
});

const CountdownTime = styled('span')({
	color: '#FF9F1C',
	backgroundColor: '#FFF5E9',
	padding: '4px 12px',
	borderRadius: '16px',
	fontSize: '14px',
});

const DateLabel = styled('div')({
	color: '#FF9F1C',
	backgroundColor: '#FFF5E9',
	padding: '4px 12px',
	borderRadius: '16px',
	fontSize: '14px',
	width: 'fit-content',
	marginBottom: '12px',
	marginTop: '16px',
});

const ActivityList = styled('div')({
	display: 'flex',
	flexDirection: 'column',
	gap: '8px',
});

const ActivityItem = styled('div')({
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'center',
	padding: '8px 12px',
	gap: '8px',
	height: '64px',
	backgroundColor: '#FFFFFF',
	boxShadow: '0px 2px 4px rgba(110, 115, 166, 0.08)',
	borderRadius: '8px',
	flex: 'none',
	alignSelf: 'stretch',
	flexGrow: 0,
	'&:hover': {
		backgroundColor: '#f5f5f5',
		cursor: 'pointer',
	},
});

const ActivityIcon = styled('div')<{ type: ActivityType }>({
	width: '32px',
	height: '32px',
	borderRadius: '50%',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	color: '#fff',
});

const ActivityContent = styled('div')({
	flex: 1,
});

const ActivityTitle = styled('div')({
	fontFamily: 'Inter',
	fontStyle: 'normal',
	fontWeight: 600,
	fontSize: '14px',
	lineHeight: '20px',
	letterSpacing: '0.15px',
	color: 'rgba(58, 53, 65, 0.87)',
	marginBottom: '4px',
	maxWidth: '252px',
	whiteSpace: 'nowrap',
	overflow: 'hidden',
	textOverflow: 'ellipsis',
});

const ActivityTime = styled('div')({
	fontSize: '14px',
	color: '#666',
});

const EmptyState = styled('div')({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
	gap: '16px',
	padding: '24px',
	textAlign: 'center',
});

const AddButton = styled('button')({
	width: '48px',
	height: '48px',
	borderRadius: '50%',
	backgroundColor: '#6B4EFF',
	border: 'none',
	color: '#fff',
	fontSize: '24px',
	cursor: 'pointer',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	'&:hover': {
		backgroundColor: '#5B3EEF',
	},
});

const EmptyStateText = styled('p')({
	color: '#666',
	fontSize: '14px',
	margin: 0,
});

const PriorityIcon = styled('div')({
	marginLeft: 'auto',
	display: 'flex',
	alignItems: 'center',
});

const getPriorityIcon = (priority: string) => {
	const theme = useTheme();

	switch (priority) {
		case 'veryHigh':
			return <DoubleArrowUpIcon style={{ width: 12, height: 13 }} />;
		case 'high':
			return <ArrowUpIcon style={{ width: 13, height: 8, marginBottom: '1px' }} />;
		case 'neutral':
			if (theme.palette.mode === 'dark') {
				return <EqualIcon style={{ width: 15, height: 8, color: '#9155FD' }} />;
			}
			return <EqualIcon style={{ width: 15, height: 8 }} />;
		case 'low':
			return <DoubleArrowDownIcon style={{ width: 13, height: 13 }} />;
		case 'notHigh':
			return <ArrowDownIcon style={{ width: 13, height: 8, marginTop: '1px' }} />;
	}
};

const CallIcon = (props: SvgIconProps) => (
	<SvgIcon {...props}>
		<g clipPath="url(#clip0_7805_58959)">
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M7.83499 12.2253C9.34454 13.7348 11.1524 14.7605 13.0681 15.3043C13.4563 15.4144 13.5583 15.4395 13.7278 15.44C13.9183 15.4405 14.2187 15.3624 14.3848 15.2691C14.528 15.1886 14.6361 15.088 15.0095 14.7145L15.1146 14.6094C15.506 14.2181 15.5828 14.1294 15.6188 14.0582C15.7145 13.869 15.7145 13.6456 15.6188 13.4564C15.5828 13.3853 15.506 13.2966 15.1146 12.9052L14.9847 12.7753C14.7276 12.5182 14.6698 12.4655 14.6259 12.437C14.405 12.2934 14.1201 12.2934 13.8991 12.437C13.8553 12.4655 13.7975 12.5182 13.5404 12.7753C13.5353 12.7804 13.5301 12.7856 13.5248 12.791C13.4649 12.851 13.3892 12.927 13.2982 12.9922C12.9736 13.2246 12.5322 13.2999 12.1488 13.1881C12.0419 13.157 11.9539 13.1145 11.8855 13.0815C11.88 13.0789 11.8748 13.0764 11.8696 13.0739C10.8363 12.5778 9.86848 11.9017 9.0135 11.0467C8.15852 10.1918 7.48246 9.22396 6.98634 8.19066C6.98386 8.18549 6.98131 8.18019 6.9787 8.17478C6.94569 8.10632 6.90327 8.01831 6.8721 7.91139C6.76035 7.52804 6.83561 7.08666 7.06809 6.762C7.13322 6.67105 7.20923 6.59531 7.26927 6.53548C7.27462 6.53015 7.27985 6.52495 7.28493 6.51987C7.54207 6.26273 7.59472 6.20491 7.62321 6.16109C7.76687 5.94013 7.76687 5.65527 7.62321 5.4343C7.59472 5.39048 7.54207 5.33266 7.28493 5.07552L7.15501 4.94561C6.76366 4.55426 6.67497 4.47742 6.60382 4.44143C6.41464 4.34574 6.19121 4.34574 6.00203 4.44143C5.93088 4.47742 5.84219 4.55426 5.45084 4.94561L5.34575 5.0507C4.97227 5.42418 4.8716 5.53219 4.79113 5.67545C4.69785 5.84149 4.61971 6.14199 4.62027 6.33243C4.62078 6.50191 4.6458 6.60397 4.75597 6.99213C5.29971 8.90785 6.32544 10.7157 7.83499 12.2253ZM12.704 16.5869C10.5752 15.9827 8.5666 14.8425 6.89218 13.1681C5.21776 11.4936 4.07752 9.48501 3.4733 7.35619C3.46972 7.34358 3.46616 7.33107 3.46264 7.31865C3.3643 6.97265 3.28804 6.70433 3.28695 6.3364C3.28569 5.91589 3.4227 5.38906 3.62865 5.02243C3.80918 4.70105 4.04729 4.4632 4.35778 4.15302C4.37266 4.13815 4.38772 4.12311 4.40294 4.10789L4.50803 4.0028C4.52953 3.9813 4.55079 3.95999 4.57184 3.93888C4.86147 3.64851 5.11183 3.39751 5.40023 3.25164C5.96779 2.96456 6.63806 2.96456 7.20562 3.25164C7.49401 3.3975 7.74438 3.64851 8.03401 3.93888C8.05506 3.95999 8.07632 3.9813 8.09782 4.0028L8.22773 4.13271C8.2419 4.14688 8.25593 4.16089 8.26983 4.17476C8.46093 4.36554 8.62555 4.52988 8.74104 4.70752C9.17204 5.37041 9.17204 6.22499 8.74104 6.88788C8.62555 7.06551 8.46093 7.22985 8.26983 7.42064C8.25593 7.43451 8.2419 7.44852 8.22773 7.46268C8.18933 7.50108 8.16974 7.52078 8.15609 7.53522C8.15584 7.53631 8.1556 7.53751 8.15538 7.5388C8.15513 7.54025 8.15495 7.54159 8.15482 7.5428C8.15702 7.54767 8.15999 7.55412 8.16409 7.56283C8.1705 7.57644 8.17803 7.59213 8.18832 7.61356C8.6202 8.51308 9.20919 9.35681 9.95631 10.1039C10.7034 10.8511 11.5472 11.44 12.4467 11.8719C12.4681 11.8822 12.4838 11.8897 12.4974 11.8962C12.5061 11.9002 12.5126 11.9032 12.5174 11.9054C12.5187 11.9053 12.52 11.9051 12.5214 11.9049C12.5227 11.9046 12.5239 11.9044 12.525 11.9042C12.5395 11.8905 12.5592 11.8709 12.5976 11.8325C12.6117 11.8183 12.6257 11.8043 12.6396 11.7904C12.8304 11.5993 12.9947 11.4347 13.1724 11.3192C13.8353 10.8882 14.6898 10.8882 15.3527 11.3192C15.5304 11.4347 15.6947 11.5993 15.8855 11.7904C15.8994 11.8043 15.9134 11.8183 15.9275 11.8325L16.0574 11.9624C16.0789 11.9839 16.1003 12.0052 16.1214 12.0262C16.4117 12.3159 16.6627 12.5662 16.8086 12.8546C17.0957 13.4222 17.0957 14.0924 16.8086 14.66C16.6627 14.9484 16.4117 15.1988 16.1214 15.4884C16.1002 15.5095 16.0789 15.5307 16.0574 15.5522L15.9523 15.6573C15.9371 15.6725 15.9221 15.6876 15.9072 15.7025C15.597 16.013 15.3592 16.2511 15.0378 16.4316C14.6712 16.6375 14.1444 16.7745 13.7238 16.7733C13.3559 16.7722 13.0876 16.6959 12.7416 16.5976C12.7292 16.5941 12.7167 16.5905 12.704 16.5869Z"
			/>
		</g>
		<defs>
			<clipPath id="clip0_7805_58959">
				<rect width="16" height="16" fill="white" transform="translate(2 2)" />
			</clipPath>
		</defs>
	</SvgIcon>
);

const EmailCustomIcon = (props: SvgIconProps) => (
	<SvgIcon {...props} viewBox="0 0 16 16">
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M11.4941 2H4.50568C3.96904 1.99999 3.52612 1.99999 3.16533 2.02946C2.7906 2.06008 2.44613 2.12579 2.12257 2.29065C1.62081 2.54631 1.21286 2.95426 0.957195 3.45603C0.798102 3.76826 0.731344 4.09997 0.699353 4.45956C0.663735 4.56846 0.657488 4.68332 0.67864 4.79298C0.666533 5.09308 0.666539 5.44021 0.666545 5.83913V10.1609C0.666536 10.6975 0.666529 11.1404 0.696008 11.5012C0.726624 11.8759 0.792334 12.2204 0.957195 12.544C1.21286 13.0457 1.62081 13.4537 2.12257 13.7094C2.44613 13.8742 2.7906 13.9399 3.16533 13.9705C3.52612 14 3.96902 14 4.50566 14H11.4941C12.0307 14 12.4736 14 12.8344 13.9705C13.2092 13.9399 13.5536 13.8742 13.8772 13.7094C14.379 13.4537 14.7869 13.0457 15.0426 12.544C15.2074 12.2204 15.2731 11.8759 15.3037 11.5012C15.3332 11.1404 15.3332 10.6975 15.3332 10.1609V5.83912C15.3332 5.44026 15.3332 5.09318 15.3211 4.79311C15.3423 4.68337 15.3361 4.56842 15.3004 4.45944C15.2684 4.0999 15.2016 3.76823 15.0426 3.45603C14.7869 2.95426 14.379 2.54631 13.8772 2.29065C13.5536 2.12579 13.2092 2.06008 12.8344 2.02946C12.4736 1.99999 12.0307 1.99999 11.4941 2ZM13.9447 4.35818C13.9209 4.22007 13.8899 4.13071 13.8546 4.06135C13.7267 3.81046 13.5227 3.60649 13.2719 3.47866C13.1676 3.42553 13.0181 3.38225 12.7259 3.35837C12.4258 3.33385 12.0376 3.33333 11.4665 3.33333H4.53321C3.96216 3.33333 3.57396 3.33385 3.2739 3.35837C2.98163 3.38225 2.83216 3.42553 2.72789 3.47866C2.47701 3.60649 2.27303 3.81046 2.1452 4.06135C2.10986 4.13071 2.07888 4.22007 2.05506 4.35816L7.15882 7.93078C7.64477 8.27096 7.74773 8.32998 7.83865 8.35264C7.94453 8.37903 8.05526 8.37903 8.16114 8.35264C8.25206 8.32998 8.35501 8.27096 8.84097 7.93078L13.9447 4.35818ZM1.99988 5.94707V10.1333C1.99988 10.7044 2.0004 11.0926 2.02491 11.3926C2.04879 11.6849 2.09208 11.8344 2.1452 11.9387C2.27303 12.1895 2.47701 12.3935 2.72789 12.5213C2.83216 12.5745 2.98163 12.6178 3.2739 12.6416C3.57396 12.6661 3.96216 12.6667 4.53321 12.6667H11.4665C12.0376 12.6667 12.4258 12.6661 12.7259 12.6416C13.0181 12.6178 13.1676 12.5745 13.2719 12.5213C13.5227 12.3935 13.7267 12.1895 13.8546 11.9387C13.9077 11.8344 13.951 11.6849 13.9748 11.3926C13.9994 11.0926 13.9999 10.7044 13.9999 10.1333V5.94709L9.5287 9.07703C9.1656 9.33199 8.84676 9.55587 8.48363 9.64639C8.166 9.72556 7.83379 9.72556 7.51616 9.64639C7.15303 9.55587 6.8342 9.33199 6.47109 9.07703L1.99988 5.94707Z"
			fill="currentColor"
		/>
	</SvgIcon>
);

const getActivityIcon = (type: string) => {
	switch (type.toLowerCase()) {
		case 'call':
			return CallIcon;
		case 'meeting':
			return MeetingRoomIcon;
		case 'email':
			return EmailCustomIcon;
		case 'task':
			return TaskIcon;
		default:
			return TaskIcon;
	}
};

const formatTime = (timestamp: number) => {
	const date = new Date(timestamp * 1000);
	return date.toLocaleTimeString('uk-UA', { hour: '2-digit', minute: '2-digit' });
};

const getTimeUntilNextActivity = (activities: Activity[]) => {
	if (!activities.length) return 0;
	const now = Date.now();
	const nextActivity = activities.find((a) => a.start_time * 1000 > now);
	if (!nextActivity) return 0;
	return Math.floor((nextActivity.start_time * 1000 - now) / 60000);
};

const getStartAndEndDayTimestamp = (date: Date): [number, number] => {
	const startDate = new Date(date);
	startDate.setHours(0, 0, 0, 0);
	const timestampStart = Math.floor(startDate.getTime() / 1000);

	const endDate = new Date(date);
	endDate.setHours(23, 59, 59, 999);
	const timestampEnd = Math.floor(endDate.getTime() / 1000);

	return [timestampStart, timestampEnd];
};

const ActivitiesWidget: FC = () => {
	const { t } = useTranslation();
	const [activities, setActivities] = useState<Activity[]>([]);
	const [loading, setLoading] = useState(true);
	const [minutesUntilNext, setMinutesUntilNext] = useState(0);

	useEffect(() => {
		const fetchTodayActivities = async () => {
			try {
				const today = new Date();
				const [startOfDay, endOfDay] = getStartAndEndDayTimestamp(today);

				const uspacyClient = Uspacy.createInstance();
				const {
					data: { data: tasks },
				} = await uspacyClient.crmTasksService.getTasksWithFilters({
					list: 1000,
					start_time: [[startOfDay, endOfDay]],
				});

				// Convert tasks to Activity type
				const convertedActivities = tasks.map((task) => ({
					id: task.id,
					title: task.title,
					description: task.description,
					start_time: task.start_time,
					end_time: task.end_time,
					type: task.type.toLowerCase() as ActivityType,
					priority: task.priority.toLowerCase() as ActivityPriority,
					status: task.status.toLowerCase() as ActivityStatus,
					responsible_id: task.responsible_id,
					created_by: task.created_by,
					created_at: task.created_at,
					updated_at: task.updated_at,
				}));

				const sortedActivities = convertedActivities.sort((a, b) => a.start_time - b.start_time);
				setActivities(sortedActivities);
				setMinutesUntilNext(getTimeUntilNextActivity(sortedActivities));
			} catch (error) {
				// Log error but don't expose to user
				if (process.env.NODE_ENV === 'development') {
					// eslint-disable-next-line no-console
					console.error('Error fetching activities:', error);
				}
			} finally {
				setLoading(false);
			}
		};

		fetchTodayActivities();
	}, []);

	useEffect(() => {
		const timer = setInterval(() => {
			setMinutesUntilNext(getTimeUntilNextActivity(activities));
		}, 60000);

		return () => clearInterval(timer);
	}, [activities]);

	const groupActivitiesByDate = (activities: Activity[]) => {
		const today = new Date();
		const tomorrow = new Date(today);
		tomorrow.setDate(tomorrow.getDate() + 1);

		return activities.reduce(
			(groups, activity) => {
				const activityDate = new Date(activity.start_time * 1000);

				if (activityDate.toDateString() === today.toDateString()) {
					return { ...groups, today: [...(groups.today || []), activity] };
				} else if (activityDate.toDateString() === tomorrow.toDateString()) {
					return { ...groups, tomorrow: [...(groups.tomorrow || []), activity] };
				} else {
					return { ...groups, next: [...(groups.next || []), activity] };
				}
			},
			{ today: [], tomorrow: [], next: [] } as Record<string, Activity[]>,
		);
	};

	if (loading) return null;

	const groupedActivities = groupActivitiesByDate(activities);

	if (!activities.length) {
		return (
			<Container>
				<Header>
					<Title>{t('nextActivities')}</Title>
					<Box component={CalendarTodayIcon} fontSize="medium" />
				</Header>
				<EmptyState>
					<AddButton>+</AddButton>
					<EmptyStateText>{t('noActivitiesMessage')}</EmptyStateText>
				</EmptyState>
			</Container>
		);
	}

	return (
		<Container>
			<Header>
				<Title>{t('nextActivities')}</Title>
				<Box component={CalendarTodayIcon} fontSize="medium" />
			</Header>

			{minutesUntilNext > 0 && (
				<NextEventContainer>
					<NextEventText>{t('nextEventIn')}:</NextEventText>
					<CountdownTime>
						{minutesUntilNext} {t('minutes')}
					</CountdownTime>
				</NextEventContainer>
			)}

			{Object.entries(groupedActivities).map(([group, groupActivities]) => {
				if (!groupActivities.length) return null;

				return (
					<React.Fragment key={group}>
						<DateLabel>{t(group.toLowerCase())}</DateLabel>
						<ActivityList>
							{groupActivities.map((activity) => {
								const Icon = getActivityIcon(activity.type);
								return (
									<ActivityItem key={activity.id}>
										<ActivityIcon type={activity.type}>
											<Icon sx={{ fontSize: 'small' }} />
										</ActivityIcon>
										<ActivityContent>
											<ActivityTitle>{activity.title}</ActivityTitle>
											<ActivityTime>
												{formatTime(activity.start_time)} - {formatTime(activity.end_time)}
											</ActivityTime>
										</ActivityContent>
										<PriorityIcon>{getPriorityIcon(activity.priority)}</PriorityIcon>
									</ActivityItem>
								);
							})}
						</ActivityList>
					</React.Fragment>
				);
			})}
		</Container>
	);
};

export default ActivitiesWidget;
