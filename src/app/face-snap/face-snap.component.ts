import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from 'models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap
  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  imageUrl!: string;
  clickSnap!: string;


  ngOnInit(): void {
    this.title = "Fillon Technologie";
    this.description = "mon premier ami depuis tout petit";
    this.createdDate = new Date();
    this.snaps = 0;
    this.imageUrl = 'https://3dfreelance.fr/wp-content/uploads/2020/05/stand-moderne_fillon-technologies.jpg';
    this.clickSnap = "add Snap";
  }

  onClickSnap(): void {
    if (this.clickSnap === "add Snap") {
      this.snaps++;
      this.clickSnap = "Oh Snap";
    }
    else {
      this.snaps--;
      this.clickSnap = "add Snap";
    }

  }

}
