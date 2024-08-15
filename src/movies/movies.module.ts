import { Module } from '@nestjs/common';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';

@Module({
  controllers: [MoviesController],
  providers: [MoviesService],
})
export class MoviesModule {}

/** 의존성 주입
 * MoviesService에서 @Injectable() 데코레이터를 사용하고 있는데
 * 이를 통해 Controller에서
 *  constructor(private readonly moviesService: MoviesService) {} 이 코드로
 * Service를 가져오고 있는 것임
 * nest가 자동으로 import 해준다 라고 간략하게 우선 이해하자
 */
