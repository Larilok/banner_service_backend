Amazon Cognito
=========
Amazon Cognito provides authentication, authorization, and user management for your web and mobile apps.

The two main components of Amazon Cognito are user pools and identity pools:
- User pools are user directories that provide sign-up and sign-in options for your app users
  - Sign-up and sign-in services.
  - Social sign-in with Facebook, Google, Login with Amazon, and Sign in with Apple, and through SAML and OIDC identity providers from your user pool.
  - User directory management and user profiles.
  - Security features such as multi-factor authentication (MFA), checks for compromised credentials, account takeover protection, and phone and email verification.

- Identity pools enable you to grant your users access to other AWS services. With an identity pool, your users can obtain temporary AWS credentials to access AWS services. It can include:
  - Users in an Amazon Cognito user pool
  - Users who authenticate with external identity providers such as Facebook, Google, Apple, or a SAML-based identity provider
  - Users authenticated via your own existing authentication process

## User directory content

- User Sing-up and Sign-in (email, phone number or username)
- User profile data (allow users customize profiles)
- Forgot password
- Token based authorization(JWT)
- email and phone verification
- sms multifactor authentication

## Lambda workflow customization

You can create an AWS Lambda function and then trigger that function during user pool operations such as user sign-up, confirmation, and sign-in (authentication) with a Lambda trigger. You can add authentication challenges, migrate users, and customize verification messages.

- Authentication Events
  - Pre Authentication Lambda Trigger

  Custom validation to accept or deny the sign-in request
  - Post Authentication Lambda Trigger

  Event logging for custom analytics
  - Pre Token Generation Lambda Trigger

  Augment or suppress token claims
- Sign-Up
  - Pre Sign-up Lambda Trigger

  Custom validation to accept or deny the sign-up request
  - Post Confirmation Lambda Trigger

  Custom welcome messages or event logging for custom analytics

  - Migrate User Lambda Trigger
  
  When a user does not exist in the user pool at the time of sign-in. Migrate a user from an existing user directory to user pools

- Messages
  - Custom Message Lambda Trigger

  Advanced customization and localization of messages
- Token Creation

  - Pre Token Generation Lambda Trigger

  Add or remove attributes in Id tokens

## Summary
Cognito User Pool
- handles the Identity Provider interactions 
- provides profiles to manage users
- provides OAuth2.0 standard tokens
- priced per monthly active user 

Cognito Identity Pool
- provides AWS credentials for accessing resources on behalf of users
- supports rules to map users to different IAM roles
- FREE