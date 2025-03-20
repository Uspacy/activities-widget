// MUI Components and Icons
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
// Third Party
import Uspacy from '@uspacy/sdk';
import React, { FC, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { ReactComponent as ArrowDownIcon } from '../../static/images/arrow-down.svg';
import { ReactComponent as ArrowUpIcon } from '../../static/images/arrow-up.svg';
import { ReactComponent as CalendarIcon } from '../../static/images/calendar.svg';
import { ReactComponent as CalendarCheckIcon } from '../../static/images/calendar-check.svg';
import { ReactComponent as ChatIcon } from '../../static/images/chat-messages.svg';
import { ReactComponent as DoubleArrowDownIcon } from '../../static/images/double-arrow-down.svg';
import { ReactComponent as DoubleArrowUpIcon } from '../../static/images/double-arrow-up.svg';
import { ReactComponent as EmptyStateIcon } from '../../static/images/empty-activity.svg';
import { ReactComponent as EqualIcon } from '../../static/images/equal.svg';
import { ReactComponent as GoogleMeetIcon } from '../../static/images/google-meet.svg';
import { ReactComponent as MailIcon } from '../../static/images/mail.svg';
import { ReactComponent as MicrosoftTeamsIcon } from '../../static/images/microsoft-teams.svg';
import { ReactComponent as CallIcon } from '../../static/images/phone.svg';
import { ReactComponent as MeetingRoomIcon } from '../../static/images/users.svg';
import { ReactComponent as ZoomIcon } from '../../static/images/zoom.svg';
// Local
import { Activity, ActivityPriority, ActivityProvider, ActivityStatus, ActivityType } from './types';
import {
	ActivityContent,
	ActivityIcon,
	ActivityItem,
	ActivityList,
	ActivityProviderBadge,
	ActivityTime,
	ActivityTitle,
	AddButton,
	Container,
	Content,
	CountdownTime,
	DateLabel,
	EmptyState,
	EmptyStateMessage,
	EmptyStateText,
	Group,
	Header,
	IconContainer,
	NextEventContainer,
	NextEventText,
	PriorityBadge,
	PriorityIcon,
	ScrollArea,
	Title,
} from './ui/primitives';

const getPriorityIcon = (priority: string) => {
	switch (priority) {
		case ActivityPriority.VERY_HIGH:
			return DoubleArrowUpIcon;
		case ActivityPriority.HIGH:
			return ArrowUpIcon;
		case ActivityPriority.LOW:
			return DoubleArrowDownIcon;
		case ActivityPriority.NOT_HIGH:
			return ArrowDownIcon;
		default:
			return EqualIcon;
	}
};

const getActivityIcon = (type: string) => {
	switch (type.toLowerCase()) {
		case ActivityType.CALL:
			return CallIcon;
		case ActivityType.MEETING:
			return MeetingRoomIcon;
		case ActivityType.EMAIL:
			return MailIcon;
		case ActivityType.CHAT:
			return ChatIcon;
		default:
			return CalendarCheckIcon;
	}
};
const getActivityProviderIcon = (provider: string = '') => {
	switch (provider.toLowerCase()) {
		case ActivityProvider.GOOGLE:
			return GoogleMeetIcon;
		case ActivityProvider.ZOOM:
			return ZoomIcon;
		case ActivityProvider.MICROSOFT_TEAMS:
			return MicrosoftTeamsIcon;
		default:
			return null;
	}
};

const getDateLabelIcon = (date: string) => {
	switch (date) {
		case 'tomorrow':
			return CalendarIcon;
		case 'next':
			return CalendarIcon;
		default:
			return null;
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
					priority: task.priority as ActivityPriority,
					status: task.status.toLowerCase() as ActivityStatus,
					responsible_id: task.responsible_id,
					created_by: task.created_by,
					created_at: task.created_at,
					updated_at: task.updated_at,
					provider: undefined,
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

	const groupActivitiesByDate = (activityList: Activity[]) => {
		const today = new Date();
		const tomorrow = new Date(today);
		tomorrow.setDate(tomorrow.getDate() + 1);

		return activityList.reduce(
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

	const groupedActivities = useMemo(() => groupActivitiesByDate(activities), [activities]);

	if (loading) return null;

	if (!activities.length) {
		return (
			<Container>
				<Header>
					<Stack flexDirection="row" width="100%" alignItems="center">
						<Title>{t('nextActivities')}</Title>
						<IconContainer component={CalendarCheckIcon} />
					</Stack>
				</Header>
				<EmptyState>
					<EmptyStateIcon color="primary" />

					<Stack gap="8px">
						<EmptyStateText>
							<EmptyStateMessage>{t('noActivitiesMessage')}</EmptyStateMessage>
							<EmptyStateMessage>{t('noActivitiesCTA')}</EmptyStateMessage>
						</EmptyStateText>
						<AddButton>{t('addActivity')}</AddButton>
					</Stack>
				</EmptyState>
			</Container>
		);
	}

	return (
		<Container>
			<Header>
				<Stack flexDirection="row" width="100%" alignItems="center">
					<Title>{t('nextActivities')}</Title>
					<IconContainer component={CalendarCheckIcon} />
				</Stack>

				{minutesUntilNext > 0 && (
					<NextEventContainer>
						<NextEventText>{t('nextEventIn')}:</NextEventText>
						<CountdownTime>
							{minutesUntilNext} {t('minutes')}
						</CountdownTime>
					</NextEventContainer>
				)}
			</Header>

			<Content>
				<ScrollArea>
					{Object.entries(groupedActivities).map(([group, groupActivities]) => {
						if (!groupActivities.length) return null;
						const LabelIcon = getDateLabelIcon(group);
						const isDateLabelIcon = !!LabelIcon;

						return (
							<Group key={group}>
								<Box paddingBottom="10px">
									{isDateLabelIcon && (
										<DateLabel type={group}>
											<LabelIcon />
											<span>{t(group.toLowerCase())}</span>
										</DateLabel>
									)}
									{!isDateLabelIcon && <DateLabel type={group}>{t(group.toLowerCase())}</DateLabel>}
								</Box>

								<ActivityList>
									{groupActivities.map((activity) => {
										const ActivitySvgIcon = getActivityIcon(activity.type);
										const PrioritySvgIcon = getPriorityIcon(activity.priority);
										const ProviderIcon = getActivityProviderIcon(activity.provider);
										const isProviderIcon = !!activity.provider && !!ProviderIcon;

										return (
											<ActivityItem key={activity.id} href={`/crm/tasks/${activity.id}`}>
												<ActivityIcon component={ActivitySvgIcon} />

												<ActivityContent>
													<Tooltip title={activity.title}>
														<ActivityTitle>{activity.title}</ActivityTitle>
													</Tooltip>

													<Stack flexDirection="row" alignItems="center">
														<ActivityTime>
															{formatTime(activity.start_time)} - {formatTime(activity.end_time)}
														</ActivityTime>

														<Stack
															flexGrow={1}
															alignItems="center"
															flexDirection="row"
															justifyContent="flex-end"
															gap="8px"
														>
															{isProviderIcon && (
																<ActivityProviderBadge>
																	<ProviderIcon />
																</ActivityProviderBadge>
															)}
															<Tooltip title={t(`priority.${activity.priority}`)}>
																<PriorityBadge type={activity.priority}>
																	<PriorityIcon component={PrioritySvgIcon} />
																</PriorityBadge>
															</Tooltip>
														</Stack>
													</Stack>
												</ActivityContent>
											</ActivityItem>
										);
									})}
								</ActivityList>
							</Group>
						);
					})}
				</ScrollArea>
			</Content>
		</Container>
	);
};

export default ActivitiesWidget;
