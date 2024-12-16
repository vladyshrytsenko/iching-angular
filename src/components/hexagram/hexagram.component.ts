import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HexagramRequest } from '../../model/hexagram-request';
import { HexagramService } from '../../service/hexagram.service';

@Component({
  selector: 'app-hexagram',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './hexagram.component.html',
  styleUrls: ['./hexagram.component.css']
})
export class HexagramComponent {
  question: string = '';
  coinResults: number[] = [];
  response: { answer: string, image: string } | null = null;
  isLoading: boolean = false;

  constructor(
    private http: HttpClient,
    private hexagramService: HexagramService
  ) {}

  throwCoins() {
    this.isLoading = true;
    this.coinResults = [];
    
    for (let i = 0; i < 6; i++) {
      const result = Math.floor(Math.random() * 2) + 2;
      this.coinResults.push(result);
    }  

    setTimeout(() => {
      this.askIChing();
    }, 10000);
  }

  askIChing() {
    const request: HexagramRequest = {
      question: this.question,
      coinResults: this.coinResults,
    };

    this.hexagramService.askQuestion(request).subscribe({
      next: (response) => {
        this.response = response;
        this.isLoading = false;
      }
    });
  }
}
