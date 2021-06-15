import parameters from './parameters'

export default {
  ...parameters,
  slack: {
    bot_scopes: [
      'app_mentions:read',
      'im:history',
      'app_mentions:read',
      'channels:join',
      'chat:write',
      'chat:write.customize',
      'im:read',
      'users:read',
      'users:read.email',
    ],
    user_scopes: [
      'identity.avatar',
      'identity.basic',
      'identity.email',
      'identity.team',
    ],
  },
}
