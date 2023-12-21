import {Component} from '@angular/core';

@Component({
  selector: 'app-votingpage',
  templateUrl: './votingpage.component.html',
  styleUrls: ['./votingpage.component.css']
})
export class VotingpageComponent{
  voteOptions: any = {};
  constructor(){
    this.setVoteOptions();
  }
  optionClicked(){
    let voteButton = document.getElementById('voteButton')!;
    voteButton.classList.remove("disabled");
  }

  hasVoted(){

    //show vote results
    let voteResults = document.getElementsByClassName('voting-result')!;
    for (let i = 0; i < voteResults.length; i++) {
      voteResults[i].classList.remove("hidden");
    }

    //disable vote button
    let voteButton = document.getElementById('voteButton')!;
    voteButton.classList.add("disabled");

    //disable vote options
    let votingOptions = document.getElementsByClassName('voting-option')!;
    for (let i = 0; i < votingOptions.length; i++) {
      votingOptions[i].classList.add("unclickable");
    }

    //show success message
    let successMessage = document.getElementById('success-message')!;
    successMessage.classList.remove('hidden');
  }

  private async setVoteOptions(){
    let response = await fetch('v1/animals/vote-options').then(function(response){
      return response.json();
    }).catch(function(error){
      return '{"optionOne": "Ivana", "optionTwo": "Jack", "optionThree": "Lara"}';
    });
    this.voteOptions = JSON.parse(response);
  }
}
