export enum BasicOrganizationStatus {
	ACTIVE = 0,
	INACTIVE = 1,
}
export enum BasicStatus {
	DISABLE = 0,
	ENABLE = 1,
}

export enum ResultStuts {
	SUCCESS = 0,
	ERROR = -1,
	TIMEOUT = 401,
}

export enum StorageEnum {
	UserInfo = "userInfo",
	UserToken = "userToken",
	Settings = "settings",
	I18N = "i18nextLng",
}

export enum ThemeMode {
	Light = "light",
	Dark = "dark",
}

export enum ThemeLayout {
	Vertical = "vertical",
	Horizontal = "horizontal",
	Mini = "mini",
}

export enum ThemeColorPresets {
	Default = "default",
	Cyan = "cyan",
	Purple = "purple",
	Blue = "blue",
	Orange = "orange",
	Red = "red",
}

export enum LocalEnum {
	en_US = "en_US",
	id_ID = "id_ID",
}

export enum MultiTabOperation {
	FULLSCREEN = "fullscreen",
	REFRESH = "refresh",
	CLOSE = "close",
	CLOSEOTHERS = "closeOthers",
	CLOSEALL = "closeAll",
	CLOSELEFT = "closeLeft",
	CLOSERIGHT = "closeRight",
}

export enum PermissionType {
	GROUP = 0,
	CATALOGUE = 1,
	MENU = 2,
	COMPONENT = 3,
}

export enum HtmlDataAttribute {
	ColorPalette = "data-color-palette",
	ThemeMode = "data-theme-mode",
}

export enum OrgLevel {
	DPP = "DPP",
	DPD = "DPD",
	DPC = "DPC",
	PAC = "PAC",
	PAR = "PAR",
	PR = "PR",
}
