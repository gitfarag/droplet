import { ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments, Validate } from 'class-validator';

@ValidatorConstraint({ async: false })
export class IsImageFileConstraint implements ValidatorConstraintInterface {
  validate(file: Express.Multer.File, args: ValidationArguments) {
    if (!file) {
      return true; // You can skip this validation if the file is optional
    }
    const validMimeTypes = ['image/jpeg', 'image/png', 'image/gif'];
    return validMimeTypes.includes(file.mimetype); // Check MIME type of the file
  }

  defaultMessage(args: ValidationArguments) {
    return 'The uploaded file must be an image (JPEG, PNG, or GIF)';
  }
}

export function IsImageFile() {
  return Validate(IsImageFileConstraint);
}