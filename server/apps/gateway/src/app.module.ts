import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { IntrospectAndCompose } from '@apollo/gateway';
import { ApolloGatewayDriver, ApolloGatewayDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloGatewayDriverConfig>({
      driver: ApolloGatewayDriver,
      gateway: {
        supergraphSdl: new IntrospectAndCompose({
          subgraphs: [
            // {
            //   name: 'users',
            //   url: 'http://localhost:4001/graphql',
            // },
          ],
        }),
      },
    }),
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
