export function validateEmail(inputValue) {
  const regexPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!inputValue) {
    return ['This field cannot be empty!'];
  }

  if (!regexPattern.test(inputValue)) {
    return ['Please enter a valid email address!'];
  }

  return [];
}

export function validateGithubUsername(inputValue) {
  const regexPattern = /^@[a-zA-Z0-9._-]{2,}$/;

  if (!inputValue) {
    return ['This field cannot be empty!'];
  }

  if (!regexPattern.test(inputValue)) {
    return ['Please enter a valid Github username!'];
  }

  return [];
}

export function validateUserName(inputValue) {
  if (!inputValue) {
    return ['This field cannot be empty!'];
  }

  return [];
}

export function validateAvatarUrl(avatarUrl) {
  if (!avatarUrl) {
    return ['Please upload an image!'];
  }

  return [];
}

export function validateUploadedFile(file) {
  if (!file.type.startsWith('image/')) {
    return ['Uploaded file must be an image!'];
  }

  if (file.size >= 500_000) { // 500kB
    return ['File too large. Please upload a photo under 500kB!'];
  }

  return [];
}