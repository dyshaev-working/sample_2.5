export class SignupRequestDto {
  public readonly email: string;
  public readonly password: string;
  public readonly passwordConfirmation: string;
  public readonly lastName: string;
  public readonly firstName: string;
  public readonly middleName: string;
  public readonly birthday: Date;
  public readonly biography: string;
}
