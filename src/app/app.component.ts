import { Component, OnInit } from '@angular/core';
import { HttpService } from './http/http.service';
import { Game } from './interface/game';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'owned-steam-games';

  games: Game[] = [];

  constructor(private httpService: HttpService) {}
  ngOnInit() {
    this.httpService.getOwnedGamesFromStream().subscribe((data: any ) => {
      console.log(data);
      this.games = data.response.games;
    });
  }


  
}
