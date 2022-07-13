import {Component, OnInit} from '@angular/core';
import {AccountService} from "../../../Services/accountService/account.service";
import {HttpClient} from "@angular/common/http";
import * as $  from "jquery"
import {Observable} from "rxjs";

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {

  constructor(private accountService: AccountService,private http:HttpClient) {}

  user: any

 async ngOnInit():Promise<void> {
   this.user = await this.accountService.findUser()
    $(function() {
      $('.view_details').click(function() {
        if ($(this).is(':checked')) {
          $(this)
            .next('label')
            .html('&times;')
            .attr('title', 'tap here to close full profile');
          $(this)
            .parent()
            .next('main')
            .slideDown('normal');
        } else {
          $(this)
            .next('label')
            .html('☰')
            .attr('title', 'tap here to view full profile');
          $(this)
            .parent()
            .next('main')
            .slideUp('fast');
        }
      });
    });
  }

}
