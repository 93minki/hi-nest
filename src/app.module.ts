import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MoviesModule } from './movies/movies.module';

@Module({
  imports: [MoviesModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}

/**
 * app 모듈은 AppController 와 AppProvider만 가지고 있어야 한다.
 * appController와 provider는 그러면 언제 쓰는가?
 * "/" 라우트에서 실행될 때 사용하면 된다.
 * 백엔드에서 HTML을 내려 보내줄 수 있으니 만약 서버에서 페이지를 리턴한다면
 * 메인 페이지를 보여주는 곳이라 생각하면 됨
 */
