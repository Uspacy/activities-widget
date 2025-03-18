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
}

export enum ActivityType {
	CALL = 'call',
	MEETING = 'meeting',
	TASK = 'task',
	DEADLINE = 'deadline',
	EMAIL = 'email',
}

export enum ActivityPriority {
	LOW = 'low',
	MEDIUM = 'medium',
	HIGH = 'high',
}

export enum ActivityStatus {
	ACTIVE = 'active',
	COMPLETED = 'completed',
	CANCELLED = 'cancelled',
}
