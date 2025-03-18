import { styled } from '@mui/material/styles';
import { format } from 'date-fns';
import React, { FC } from 'react';

import { Activity } from '../types';

const Container = styled('div')(({ theme }) => ({
	padding: '8px 20px',
	display: 'flex',
	alignItems: 'center',
	gap: '12px',
	'&:hover': {
		backgroundColor: theme.palette.action.hover,
		cursor: 'pointer',
	},
}));

const ActivityAvatar = styled('div')(({ theme }) => ({
	width: '32px',
	height: '32px',
	borderRadius: '50%',
	backgroundColor: theme.palette.primary.main,
	color: theme.palette.primary.contrastText,
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	fontSize: '14px',
	fontWeight: 500,
}));

const Info = styled('div')(() => ({
	display: 'flex',
	flexDirection: 'column',
	gap: '4px',
}));

const Title = styled('div')(({ theme }) => ({
	fontSize: '14px',
	fontWeight: 500,
	color: theme.palette.text.primary,
}));

const Time = styled('div')(({ theme }) => ({
	fontSize: '12px',
	color: theme.palette.text.secondary,
}));

interface ActivityCardProps {
	activity: Activity;
}

const ActivityCard: FC<ActivityCardProps> = ({ activity }) => {
	const startTime = format(activity.start_time * 1000, 'HH:mm');
	const endTime = format(activity.end_time * 1000, 'HH:mm');

	return (
		<Container>
			<ActivityAvatar>{activity.type.charAt(0).toUpperCase()}</ActivityAvatar>
			<Info>
				<Title>{activity.title}</Title>
				<Time>{`${startTime} - ${endTime}`}</Time>
			</Info>
		</Container>
	);
};

export default ActivityCard;
