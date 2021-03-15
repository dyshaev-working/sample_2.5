module.exports = {
    app: {
        port: 3000,
    },
    jwt: {
        jwt_secret: 'FAKE_SECRET',
        jwt_session: {
            session: false,
        },
    },
    account: {
        salt: 'FAKE_SALT',
    },
};