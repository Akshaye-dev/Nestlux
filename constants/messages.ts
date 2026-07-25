export const AUTH_MESSAGES = {
  DEFAULT: "Unable to sign in. Please try again later.",
  LOGIN_SUCCESS: "Welcome back!",
  REGISTER_SUCCESS: "Account created successfully.",
  PASSWORD_RESET_SENT: "Password reset email has been sent.",
  EMAIL_VERIFICATION_SENT: "Verification email sent.",
  INVALID_EMAIL: "Please enter a valid email address.",
  WRONG_PASSWORD: "Incorrect email or password.",

  USER_NOT_FOUND: "No account found with this email.",
  EMAIL_ALREADY_IN_USE: "This email is already registered.",
  WEAK_PASSWORD: "Password should be at least 6 characters.",
  NETWORK_ERROR: "Network error. Please try again later.",
  UNKNOWN_ERROR: "An unknown error occurred. Please try again.",
  INVALID_CREDENTIALS: "Invalid email or password.",
  ACCOUNT_DISABLED: "This account has been disabled.",
  TOO_MANY_REQUESTS: "Too many requests. Please try again later.",
  SIGN_OUT_SUCCESS: "You have been signed out successfully.",
  SIGN_OUT_ERROR: "Error signing out. Please try again.",
  PASSWORD_RESET_SUCCESS: "Password reset successful. Please log in.",
  PASSWORD_RESET_ERROR: "Error resetting password. Please try again.",
  EMAIL_VERIFICATION_SUCCESS: "Email verified successfully.",
  EMAIL_VERIFICATION_ERROR: "Error verifying email. Please try again.",
  ACCOUNT_DELETION_SUCCESS: "Account deleted successfully.",
  ACCOUNT_DELETION_ERROR: "Error deleting account. Please try again.",
  SESSION_EXPIRED: "Your session has expired. Please log in again.",
  UNAUTHORIZED_ACCESS: "You are not authorized to access this resource.",
  INVALID_TOKEN: "Invalid or expired token. Please log in again.",
  USER_ALREADY_EXISTS: "A user with this email already exists.",
  USER_NOT_VERIFIED: "Please verify your email before logging in.",
  PASSWORD_MISMATCH: "Passwords do not match. Please try again.",
  INVALID_PASSWORD_FORMAT:
    "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.",
  INVALID_EMAIL_FORMAT: "Please enter a valid email address.",
  SOMETHING_WENT_WRONG: "Something went wrong. Please try again later.",
  ACCOUNT_LOCKED:
    "Your account has been locked due to multiple failed login attempts.",
  ACCOUNT_SUSPENDED: "Your account has been suspended. Please contact support.",
};

export const FIREBASE_ERROR_MESSAGES = {
  "auth/invalid-email": "Please enter a valid email address.",
  "auth/invalid-credential": "Incorrect email or password.",
  "auth/user-not-found": "No account found with this email.",
  "auth/wrong-password": "Incorrect email or password.",
  "auth/email-already-in-use": "An account with this email already exists.",
  "auth/weak-password": "Choose a stronger password.",
  "auth/network-request-failed": "No internet connection. Check your network.",
  "auth/too-many-requests": "Too many attempts. Please try again later.",
};

export const FORM_MESSAGES = {
  EMPTY_FIELDS: "Please enter all required fields.",
  EMPTY_EMAIL_PASSWORD: "Please enter both email and password.",
};
