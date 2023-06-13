import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData,
  doc, docData, deleteDoc, updateDoc, DocumentReference, setDoc } from '@angular/fire/firestore';
import { IBook } from '../models/book.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private firestore: Firestore) { }

  addBook(book: IBook) {
    const booksRef = collection(this.firestore, 'books');
    return addDoc(booksRef, book);
  }

  getBooks(): Observable<IBook[]> {
    const booksRef = collection(this.firestore, 'books');
    return collectionData(booksRef, { idField: 'id' }) as Observable<IBook[]>;
  }

}
