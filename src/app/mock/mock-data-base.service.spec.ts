import { resolve } from 'url';
import { UserBuilder } from '../core/model/builders/userBuilder';
import { TestBed } from '@angular/core/testing';

import { MockDataBaseService } from './mock-data-base.service';
import { User } from '../core/model/user';

describe('Test for MockDataBaseService', () => {
  let builderUserForTest: UserBuilder;
  let mockService: MockDataBaseService;
  let userTest: User;

  beforeEach(() => TestBed.configureTestingModule({}));

  beforeAll(() => {
    mockService = new MockDataBaseService();
    builderUserForTest = new UserBuilder();
    userTest = builderUserForTest.restart().email('UserTest@jasmine.org').password('b€f0r3Eac4').build();
  });

  afterEach(() => {
    mockService.userActive = null;
  });

  it('should be created', () => {
    const service: MockDataBaseService = TestBed.get(MockDataBaseService);
    expect(service).toBeTruthy();
  });


  it('should signUp', () => {
    mockService.signUp(userTest.email, userTest.password);
    expect(mockService.users.pop().email).toEqual(userTest.email);
  });


  it('should not singIn', () => {
    mockService.signIn(userTest.email, userTest.password);
    expect(mockService.userActive).toBeFalsy();
  });

  it('should singIn', () => {
    mockService.signIn(mockService.users[0].email, mockService.users[0].password);
    expect(mockService.userActive).toEqual(mockService.users[0]);
  });
});
