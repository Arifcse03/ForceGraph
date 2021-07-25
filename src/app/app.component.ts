import { Component , OnInit} from '@angular/core';
import ForceGraph3D from '3d-force-graph';
import * as fg from 'force-graph';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ForceGraph';

  constructor(){}
  ngOnInit():void{
    fetch('assets/fakedata.json'  ).then(res => res.json()).then(data => {
      const graph = fg.default()
      (document.getElementById('graph'))
        .backgroundColor('#101020')
        .linkColor(() => 'rgba(255,255,255,0.2)')
        .linkDirectionalParticles(1)
        .graphData(data);
      });





  }
}
