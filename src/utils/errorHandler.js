export class AppError extends Error {
  constructor(message, statusCode = 500, details = null, errorType = 'API_ERROR') {
    super(message);
    this.name = 'AppError';
    this.statusCode = statusCode;
    this.details = details;
    this.errorType = errorType;
    this.timestamp = new Date().toISOString();
  }
}

export const ErrorTypes = {
  NETWORK_ERROR: 'NETWORK_ERROR',
  API_ERROR: 'API_ERROR',
  VALIDATION_ERROR: 'VALIDATION_ERROR',
  AUTH_ERROR: 'AUTH_ERROR',
  TIMEOUT_ERROR: 'TIMEOUT_ERROR',
  NOT_FOUND_ERROR: 'NOT_FOUND_ERROR'
};

export const handleError = (error, context = '') => {
  console.error(`[${context}] Error:`, error);
  
  let userMessage = 'Something went wrong. Please try again.';
  let statusCode = 500;
  let errorType = ErrorTypes.API_ERROR;
  let details = null;

  // Handle different error types
  if (error.response) {
    // Server responded with error status
    statusCode = error.response.status;
    details = error.response.data;
    
    switch (statusCode) {
      case 400:
        userMessage = 'Bad request. Please check your input.';
        errorType = ErrorTypes.VALIDATION_ERROR;
        break;
      case 401:
        userMessage = 'Unauthorized. Please login to continue.';
        errorType = ErrorTypes.AUTH_ERROR;
        break;
      case 403:
        userMessage = 'Forbidden. You do not have permission.';
        errorType = ErrorTypes.AUTH_ERROR;
        break;
      case 404:
        userMessage = 'Resource not found.';
        errorType = ErrorTypes.NOT_FOUND_ERROR;
        break;
      case 408:
        userMessage = 'Request timeout. Please try again.';
        errorType = ErrorTypes.TIMEOUT_ERROR;
        break;
      case 500:
        userMessage = 'Server error. Please try again later.';
        errorType = ErrorTypes.API_ERROR;
        break;
      case 502:
        userMessage = 'Bad gateway. Please try again later.';
        errorType = ErrorTypes.API_ERROR;
        break;
      case 503:
        userMessage = 'Service unavailable. Please try again later.';
        errorType = ErrorTypes.API_ERROR;
        break;
      default:
        userMessage = error.response.data?.message || userMessage;
    }
  } else if (error.request) {
    // Request was made but no response received
    userMessage = 'Network error. Please check your connection.';
    errorType = ErrorTypes.NETWORK_ERROR;
    statusCode = 0;
  } else if (error.code === 'ECONNABORTED') {
    // Request timeout
    userMessage = 'Request timeout. Please try again.';
    errorType = ErrorTypes.TIMEOUT_ERROR;
    statusCode = 408;
  } else {
    // Other errors
    userMessage = error.message || userMessage;
  }

  return new AppError(userMessage, statusCode, {
    originalError: error,
    context,
    timestamp: new Date().toISOString(),
    url: error.config?.url,
    method: error.config?.method
  }, errorType);
};

export const isAppError = (error) => {
  return error instanceof AppError;
};

// Utility function to check if error is a specific type
export const isErrorType = (error, type) => {
  return isAppError(error) && error.errorType === type;
};

// Utility to extract error message for UI
export const getErrorMessage = (error, fallback = 'Something went wrong') => {
  if (isAppError(error)) {
    return error.message;
  }
  if (typeof error === 'string') {
    return error;
  }
  if (error?.message) {
    return error.message;
  }
  return fallback;
};