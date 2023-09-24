import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  @Output() signOut: EventEmitter<void> = new EventEmitter<void>();
  user = {
    name: 'Tham',
    lastName: 'Hong'
  }

  public signOutEmit(): void {
    this.signOut.emit();
  }
}
