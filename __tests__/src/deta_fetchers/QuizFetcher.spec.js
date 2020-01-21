import QuizFetcher from '../../../src/data_fetchers/QuizFetcher';

describe('テスト', () => {
  it('test', () => {
    expect( typeof QuizFetcher ).toStrictEqual('function');
  });

  describe('fetchクラスメソッド', () => {
    it('10件のクイズデータが手にはいる', async () => {
      const data = await QuizFetcher.fetch();
      console.log(data, '@@@@@@@@')
    });
  });

});