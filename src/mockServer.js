import { createServer } from 'miragejs';

function mockServer() {
  
    let server = createServer({
            routes(){
                this.urlPrefix= 'https://www.fakeapi.com';
                this.namespace= '/v1/api';
                this.timing= 3000 //mennyit kelljen várni az adatokra (ms-ban) 

                this.get('/books', () => {
                    return [
                        {title: 'könyv1', author: 'Adam', year: 2001},
                        {title: 'könyv2', author: 'Peter', year: 2002},
                        {title: 'könyv3', author: 'Daniel', year: 2003}
                    ]
                })
            }
        }
    );

    return server
}

export default mockServer