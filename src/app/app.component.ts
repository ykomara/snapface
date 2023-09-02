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
    this.mySnap = {
      titre: 'Fillon Technologie',
      description: 'mon premier ami depuis tout petit',
      createdDate: new Date,
      snaps: 6,
      imageUrls: 'https://3dfreelance.fr/wp-content/uploads/2020/05/stand-moderne_fillon-technologies.jpg',
      localisation: 'Rennes'
    }

    this.yourSnap = {
      titre: 'ykomarahightech',
      description: 'mon premier site angular',
      createdDate: new Date,
      snaps: 6,
      imageUrls: 'https://img.freepik.com/photos-premium/jaguar-noir-est-nom-cet-animal_899870-25934.jpg?w=360',
      localisation: 'Paris'
    }
  }



}

