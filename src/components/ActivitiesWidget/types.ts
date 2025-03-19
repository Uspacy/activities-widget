export interface Activity {
	id: number;
	title: string;
	description?: string;
	start_time: number;
	end_time: number;
	type: ActivityType;
	priority: ActivityPriority;
	status: ActivityStatus;
	responsible_id: number;
	created_by: number;
	created_at: number;
	updated_at: number;
	provider?: ActivityProvider;
}

export enum ActivityType {
	CALL = 'call',
	MEETING = 'meeting',
	TASK = 'task',
	CHAT = 'chat',
	EMAIL = 'email',
}

export enum ActivityPriority {
	LOW = 'low',
	NEUTRAL = 'neutral',
	NOT_HIGH = 'notHigh',
	HIGH = 'high',
	VERY_HIGH = 'veryHigh',
}

export enum ActivityStatus {
	ACTIVE = 'active',
	COMPLETED = 'completed',
	CANCELLED = 'cancelled',
}
export enum ActivityProvider {
	GOOGLE = 'google',
	MICROSOFT_TEAMS = 'teams',
	ZOOM = 'zoom',
}
