import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-servers",
  templateUrl: "./servers.component.html",
  styleUrls: ["./servers.component.css"]
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  otherVariable = "Hold....";
  serverCreationStatus = "No server was created.";
  serverName = '';
  serverCreated = false;

  constructor() {
    setTimeout( () => {
      this.allowNewServer = true;
    }, 3000);
  }

  ngOnInit() {}

  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus = this.serverName + " Server was created!";
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
