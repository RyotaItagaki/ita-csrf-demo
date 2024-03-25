import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthService],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // テストケースを追加
  // ユーザーを作成するテスト
  it('should create a user', async () => {
    const user = await service.createUser({
      name: 'test',
      email: 'test@example.com',
      password: 'password',
    });
    expect(user).toHaveProperty('id');
    expect(user).toHaveProperty('name', 'test');
    // expect(user).toHaveProperty('email', '');
    // expect(user).toHaveProperty('password');
  });
});
