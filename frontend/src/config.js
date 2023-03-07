const config = {
    MAX_ATTACHMENT_SIZE: 5000000,
    STRIPE_KEY: "pk_test_51MhjRSBUHLXGNa0taJ6HJSXsJGT5DVSbdbqO6q6HwZe5KDFiSUFtRZeWVxy0o6E5Ec5e4XPk7FNa0gRLQfLRBx4F00FAaPt7sR",
    // Backend config
    s3: {
      REGION: process.env.REACT_APP_REGION,
      BUCKET: process.env.REACT_APP_BUCKET,
    },
    apiGateway: {
      REGION: process.env.REACT_APP_REGION,
      URL: process.env.REACT_APP_API_URL,
    },
    cognito: {
      REGION: process.env.REACT_APP_REGION,
      USER_POOL_ID: process.env.REACT_APP_USER_POOL_ID,
      APP_CLIENT_ID: process.env.REACT_APP_USER_POOL_CLIENT_ID,
      IDENTITY_POOL_ID: process.env.REACT_APP_IDENTITY_POOL_ID,
    },
  };

  export default config;