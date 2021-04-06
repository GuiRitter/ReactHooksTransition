import * as type from './type';

export const mount = () => ({
	type: type.MOUNT
});

export const unmount = () => ({
	type: type.UNMOUNT
});

export const turnOn = () => ({
	type: type.TURN_ON
});

export const turnOff = () => ({
	type: type.TURN_OFF
});
