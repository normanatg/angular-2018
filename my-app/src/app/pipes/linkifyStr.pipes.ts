import {Pipe, PipeTransform } from "@angular/core";
import LinkifyStr from 'linkifyjs/string';
@Pipe({
    name: 'linkifystr'
})

export class LinkifyStrPipe implements PipeTransform{
    transform(str: string): string{
        return str ? LinkifyStr(str, {target:'_system'}) : str;
    }
}