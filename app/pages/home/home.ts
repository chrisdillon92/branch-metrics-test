import {Page} from 'ionic-angular';
import {GitHubService} from '../../providers/git-hub-service/git-hub-service';

@Page({
  templateUrl: 'build/pages/home/home.html',
  providers: [GitHubService]
})
export class HomePage {
  public foundRepos;
  public username;
  
  constructor(private github: GitHubService) {}
  
  getRepos() {
    this.github.getRepos(this.username).subscribe(
      data => {
        this.foundRepos = data.json();
      },
      err => console.error(err),
      () => console.log('getRepos completed, yay!')
    );
  }
}

