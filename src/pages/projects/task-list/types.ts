export enum TaskPriority {
	LOW = "Low",
	MEDIUM = "Medium",
	HIGH = "High",
}

export enum TaskTag {
	DPP = "DPP",
	DPD = "DPD",
	DPC = "DPC",
	PAC = "PAC",
	PR = "PR",
	PAR = "PAR",
}

export type TaskComment = {
	username: string;
	avatar: string;
	content: string;
	time: Date;
};

export type Task = {
	id: string;
	title: string;
	reporter: string; // avatar
	priority: TaskPriority;
	assignee?: string[]; // avatar array
	tags?: string[];
	date?: Date;
	description?: string;
	comments?: TaskComment[];
	attachments?: string[];
};
export type Tasks = Record<string, Task>;

export type Column = {
	id: string;
	title: string;
	taskIds: string[];
};
export type Columns = Record<string, Column>;

export type DndDataType = {
	tasks: Tasks;
	columns: Columns;
	columnOrder: string[];
};
