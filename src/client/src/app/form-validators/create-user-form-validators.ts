import { FormGroup } from "@angular/forms";

export function confirmPassword(group: FormGroup) {
    const password = group.controls.password.value
    const confirmPassword = group.controls.confirmPassword.value
    return password === confirmPassword ? null : {passwordsDoNotMatch: true}
}