import { Component, OnInit } from '@angular/core';
import { FaceSnap } from 'models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  mySnap!: FaceSnap
  yourSnap!: FaceSnap
  ngOnInit(): void {
    this.mySnap = new FaceSnap(
      'Fillon Technologie',
      'mon premier ami depuis tout petit',
      new Date,
      0,
      'https://3dfreelance.fr/wp-content/uploads/2020/05/stand-moderne_fillon-technologies.jpg'
    )
    this.yourSnap = new FaceSnap(
      'ykomarahightech',
      'mon premier site angular',
      new Date,
      0,
      'https://img.freepik.com/photos-premium/jaguar-noir-est-nom-cet-animal_899870-25934.jpg?w=360'
    )
  }


}
