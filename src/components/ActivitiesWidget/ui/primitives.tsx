import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

import { ActivityPriority } from '../types.d';

export const Container = styled('div')({
	width: '100%',
	maxWidth: '336px',
	backgroundColor: '#F9FAFC',
	borderRadius: '12px',
});
export const Content = styled('div')({
	padding: '0 0 20px 20px',
	borderBottomLeftRadius: 'inherit',
	borderBottomRightRadius: 'inherit',
});

export const Header = styled('div')({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'flex-start',
	gap: '8px',
	backgroundColor: '#ffffff',
	padding: '16px 20px 6px 20px',
	borderTopLeftRadius: 'inherit',
	borderTopRightRadius: 'inherit',
});

export const Title = styled('h2')({
	fontSize: '18px',
	fontWeight: 500,
	color: 'rgba(58, 53, 65, 0.87)',
	margin: 0,
	lineHeight: 1.5,
	letterSpacing: '0.15px',
});

export const NextEventContainer = styled('div')({
	display: 'flex',
	gap: '8px',
	alignItems: 'center',
});

export const NextEventText = styled('span')({
	color: '#666',
	fontSize: '14px',
});

export const Badge = styled('span')({
	color: '#FF9F1C',
	backgroundColor: '#fdeddf',
	padding: '4px 12px',
	borderRadius: '16px',
	fontSize: '12px',
	border: '1px solid',
	borderColor: '#f9d5b8',
	width: 'fit-content',
	lineHeight: 1,
});
export const CountdownTime = Badge;
export const DateLabel = styled(Badge)<{ type: string }>(({ type }) => {
	if (type === 'tomorrow') {
		return {
			display: 'flex',
			alignItems: 'center',
			padding: '2px 12px 2px 2px',
			color: '#5dcc0e',
			backgroundColor: '#e9f5e9',
			borderColor: '#d1e8d2',
			'& svg': {
				fill: '#56ca00',
				width: '20px',
				height: '20px',
			},
		};
	}
	if (type === 'next') {
		return {
			display: 'flex',
			alignItems: 'center',
			padding: '2px 12px 2px 2px',
			color: '#514c59',
			backgroundColor: '#f4f4f7',
			borderColor: '#f8f8fa',
			'& svg': {
				fill: '#8c8a97',
				width: '20px',
				height: '20px',
			},
		};
	}
	return {};
});

export const ActivityItem = styled('div')({
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'center',
	padding: '8px 16px',
	gap: '12px',
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

export const ActivityIcon = styled(Box)<{ type: string }>({
	width: '16px',
	height: '16px',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	color: '#544f5a',
	flexShrink: 0,
	alignSelf: 'flex-start',
	marginTop: '4px',
});

export const ActivityContent = styled('div')({
	flex: 1,
	maxWidth: 'calc(100% - 28px)',
});

export const ActivityTitle = styled('div')({
	fontFamily: 'Inter',
	fontStyle: 'normal',
	fontWeight: 600,
	fontSize: '14px',
	lineHeight: '20px',
	letterSpacing: '0.15px',
	color: 'rgba(58, 53, 65, 0.87)',
	marginBottom: '2px',
	whiteSpace: 'nowrap',
	overflow: 'hidden',
	textOverflow: 'ellipsis',
	maxWidth: '100%',
});

export const ActivityTime = styled('div')({
	fontSize: '12px',
	color: '#544f5a',
});

export const EmptyState = styled('div')({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
	gap: '16px',
	padding: '24px',
	textAlign: 'center',
});

export const AddButton = styled(Button)({
	textTransform: 'unset',
});

export const EmptyStateText = styled('p')({
	color: '#666',
	fontSize: '14px',
	margin: 0,
});

export const PriorityIcon = styled(Box)({
	flexShrink: 0,
});

export const RoundedBadge = styled(Box)({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	borderRadius: '50%',
	height: '24px',
	width: '24px',
	flexShrink: 0,
	border: '1px solid',
	backgroundColor: '#edeffb',
	borderColor: '#edeffb',
	color: '#edeffb',
});

export const PriorityBadge = styled(RoundedBadge)<{ type: ActivityPriority }>(({ type }) => {
	const styles = {
		backgroundColor: '#f0f1f1',
		borderColor: '#dddddf',
		color: '#a2a0a5',
		'& svg': {
			width: '75%',
			height: '75%',
		},
	};

	switch (type) {
		case ActivityPriority.VERY_HIGH:
			styles.backgroundColor = '#fee8e6';
			styles.borderColor = '#fbc9c5';
			styles.color = '#fe6a6e';
			break;
		case ActivityPriority.HIGH:
			styles.backgroundColor = '#fdeddf';
			styles.borderColor = '#f9d5b8';
			styles.color = '#FF9F1C';
			break;

		case ActivityPriority.LOW:
			styles.backgroundColor = '#e4f2fd';
			styles.borderColor = '#bee0fb';
			styles.color = '#3cade5';
			break;
		case ActivityPriority.NOT_HIGH:
			break;
		default:
	}

	return styles;
});
export const MeetingProviderBadge = styled(RoundedBadge)({
	padding: '2px',
});

export const IconContainer = styled(Box)({
	marginLeft: 'auto',
	display: 'flex',
	alignItems: 'center',
	fontWeight: 500,
	color: '#959198',
	width: '20px',
	height: '20px',
});

export const ScrollArea = styled('div')({
	height: '400px',
	overflowY: 'auto',
	overscrollBehavior: 'contain',
	paddingTop: '12px',
	paddingRight: '20px',
});
export const ActivityList = styled('div')({
	'& > :not(:last-child)': {
		marginBottom: '8px',
	},
});

export const Group = styled('div')({
	'&:not(:last-child)': {
		marginBottom: '8px',
	},
});
