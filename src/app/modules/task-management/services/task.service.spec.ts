import { TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from "@ngrx/store/testing";
import { StoreModule } from "@ngrx/store"; // Import StoreModule
import { TaskService } from './task.service';
import { UserSelectors } from "../../../core/store";
import { of } from "rxjs";
import {reducers} from "../../../core/store/root-state";

describe('TaskService', () => {
    let service: TaskService;
    let store: MockStore;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                StoreModule.forRoot(reducers), // Configure NgRx StoreModule with your reducers
            ],
            providers: [
                TaskService,
                provideMockStore({ selectors: [{ selector: UserSelectors.selectUsers, value: [] }] }),
            ],
        });

        service = TestBed.inject(TaskService);
        store = TestBed.inject(MockStore);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should return user list from the store', () => {
        const mockUserList = [
            { id: 1, name: 'User 1' },
            { id: 2, name: 'User 2' },
        ];

        spyOn(store, 'select').and.returnValue(of(mockUserList));

        service.getUserList$().subscribe((userList) => {
            expect(userList).toEqual(mockUserList);
        });
    });

    it('should return task by ID from the store', () => {
        const mockTask = { id: 1, description: 'Task 1' };

        spyOn(store, 'select').and.returnValue(of(mockTask));

        service.getTaskById$().subscribe((task) => {
            expect(task).toEqual(mockTask);
        });
    });
});
