declare module 'moleculer-io' {
	import { Errors, ServiceSchema } from 'moleculer';
	import SocketIO = require('socket.io');
	const ERR_INVALID_TOKEN = 'ERR_INVALID_TOKEN';

	export class UnAuthorizedError extends Errors.MoleculerError {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		constructor(type: string, data: any);
	}
	export class BadRequestError extends Errors.MoleculerError {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		constructor(type: string, data: any);
	}

	export interface SocketIOContextMeta {
		user?: string;
		$rooms?: SocketIO.Rooms;
		$join?: string[] | string;
		$leave?: string[] | string;
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		[key: string]: any;
	}

	export interface SocketIOServiceSchema extends ServiceSchema {}
}
