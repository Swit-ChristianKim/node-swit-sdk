import {platform, release} from 'os';
import {version} from '../../package.json';
import {version as nodejsVersion} from 'process';

export const userAgent = (): string => {
    return `nodejs-${nodejsVersion}/os-${platform()}-${release()}/api-${version}`;
}