import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

import BtnDefault from '../../components/Buttons/Default';

import { RootReducer } from '../../Redux/store';
import { close, remove, clear } from '../../Redux/slice/Cart/slice';
import { formatPrice, getTotalPrice } from '../../utils';

import * as Style from './styles';

const Cart = () => {
  const { itemsCart, isOpen } = useSelector((state: RootReducer) => state.cart);
  const [continueDelivery, setContinueDelivery] = useState(false);
  const [continuePayment, setContinuePayment] = useState(false);
  const [finalizePayment, setfinalizePayment] = useState(false);

  const dispatch = useDispatch();

  const closeCart = () => {
    dispatch(close());
  };

  const removeItem = (id: number) => {
    dispatch(remove(id));
  };

  const finalizePurchase = () => {
    setfinalizePayment(false);
    setContinuePayment(false);
    setContinueDelivery(false);
    dispatch(clear());
    closeCart();
  };

  return (
    <Style.CartContainer className={isOpen ? 'is-open' : ''}>
      <Style.Overlay onClick={closeCart} />
      <Style.SideBar>
        {!continueDelivery ? (
          <>
            {itemsCart.length > 0 ? (
              <>
                <ul>
                  {itemsCart.map(item => (
                    <Style.CartItem key={item.id}>
                      <img src={item.foto} alt={item.nome} />
                      <div>
                        <h5>{item.nome}</h5>
                        <span>{formatPrice(item.preco)}</span>
                      </div>
                      <Style.Dump onClick={() => removeItem(item.id)} />
                    </Style.CartItem>
                  ))}
                </ul>
                <Style.Prices>
                  <span>Valor total</span>
                  <span>{formatPrice(getTotalPrice(itemsCart))}</span>
                </Style.Prices>
                <BtnDefault onClick={() => setContinueDelivery(true)}>
                  Continuar com a entrega
                </BtnDefault>
              </>
            ) : (
              <>
                <h3>
                  O carrinho está vazio, adicione pelo menos um produto para
                  continuar com a compra
                </h3>
              </>
            )}
          </>
        ) : (
          <Style.FormContainer>
            {!continuePayment ? (
              <>
                <h3>Entrega</h3>
                <div className="form__delivery">
                  <Style.InputGroup>
                    <label htmlFor="name">Nome no cartão</label>
                    <input id="name" type="text" name="name" />
                  </Style.InputGroup>
                  <Style.InputGroup>
                    <label htmlFor="address">Endereço</label>
                    <input id="address" type="text" name="address" />
                  </Style.InputGroup>
                  <Style.InputGroup>
                    <label htmlFor="city">Cidade</label>
                    <input id="city" type="text" name="city" />
                  </Style.InputGroup>
                  <div className="d-flex">
                    <Style.InputGroup maxWidth="155px">
                      <label htmlFor="cep">CEP</label>
                      <input id="cep" type="text" name="cep" />
                    </Style.InputGroup>
                    <Style.InputGroup maxWidth="155px">
                      <label htmlFor="number">Número</label>
                      <input id="number" type="text" name="number" />
                    </Style.InputGroup>
                  </div>
                  <Style.InputGroup>
                    <label htmlFor="complement">Complemento (Opcional)</label>
                    <input id="complement" type="text" name="complement" />
                  </Style.InputGroup>
                </div>
                <Style.InputGroup>
                  <BtnDefault onClick={() => setContinuePayment(true)}>
                    Continuar com o Pagamento
                  </BtnDefault>
                  <BtnDefault onClick={() => setContinueDelivery(false)}>
                    Voltar para o carrinho
                  </BtnDefault>
                </Style.InputGroup>
              </>
            ) : (
              <>
                {!finalizePayment ? (
                  <>
                    <h3>
                      Pagamento - Valor a pagar{' '}
                      {formatPrice(getTotalPrice(itemsCart))}
                    </h3>
                    <div className="form__payment">
                      <Style.InputGroup>
                        <label htmlFor="nameInCart">Nome no cartão</label>
                        <input id="nameInCart" type="text" name="nameInCart" />
                      </Style.InputGroup>
                      <div className="d-flex">
                        <Style.InputGroup maxWidth="228px">
                          <label htmlFor="numberInCart">Número no cartão</label>
                          <input
                            id="numberInCart"
                            type="text"
                            name="numberInCart"
                          />
                        </Style.InputGroup>
                        <Style.InputGroup maxWidth="83px">
                          <label htmlFor="cardCode">CVV</label>
                          <input id="cardCode" type="text" name="cardCode" />
                        </Style.InputGroup>
                      </div>
                      <div className="d-flex">
                        <Style.InputGroup maxWidth="155px">
                          <label htmlFor="expirationMonth">
                            Mês de vencimento
                          </label>
                          <input
                            id="expirationMonth"
                            type="text"
                            name="expirationMonth"
                          />
                        </Style.InputGroup>
                        <Style.InputGroup maxWidth="155px">
                          <label htmlFor="expirationYear">
                            Ano de vencimento
                          </label>
                          <input
                            id="expirationYear"
                            type="text"
                            name="expirationYear"
                          />
                        </Style.InputGroup>
                      </div>
                    </div>
                    <Style.InputGroup>
                      <BtnDefault onClick={() => setfinalizePayment(true)}>
                        Finalizar pagamento
                      </BtnDefault>
                      <BtnDefault onClick={() => setContinuePayment(false)}>
                        Voltar para a edição de endereço
                      </BtnDefault>
                    </Style.InputGroup>
                  </>
                ) : (
                  <>
                    <h3>
                      Pedido realizado - <span>(Número do pedido)</span>
                    </h3>
                    <div className="form__finalize__payment">
                      <p>
                        Estamos felizes em informar que seu pedido já está em
                        processo de preparação e, em breve, será entregue no
                        endereço fornecido.
                      </p>
                      <p>
                        Gostaríamos de ressaltar que nossos entregadores não
                        estão autorizados a realizar cobranças extras.
                      </p>
                      <p>
                        Lembre-se da importância de higienizar as mãos após o
                        recebimento do pedido, garantindo assim sua segurança e
                        bem-estar durante a refeição.
                      </p>
                      <p>
                        Esperamos que desfrute de uma deliciosa e agradável
                        experiência gastronômica. Bom apetite!
                      </p>
                    </div>
                    <BtnDefault onClick={finalizePurchase}>Concluir</BtnDefault>
                  </>
                )}
              </>
            )}
          </Style.FormContainer>
        )}
      </Style.SideBar>
    </Style.CartContainer>
  );
};

export default Cart;
