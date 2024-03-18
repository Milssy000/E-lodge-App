import { Component,OnInit } from '@angular/core';
import { ProfileService } from 'src/app/core/services/profile.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{

profil:any;
  constructor(private profilService: ProfileService){
    //
  }
  ngOnInit(): void {
    this.profilService.getProfils().subscribe((profil: any) => {
      this.profil = profil.objects;
  });

  }
}
