import { Pipe, type PipeTransform } from '@angular/core';
import { User } from '../../core/models/User';

@Pipe({
  name: 'appFilter',
  standalone: true,
})
export class FilterPipe implements PipeTransform {
  transform(value: User[], ...args: unknown[]): unknown {
    if (!value) return null;
    if (!args) return value;

    return value.filter((us) => us.id == args[0]);
  }
}
