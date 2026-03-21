import { Router, Route, Set } from '@redwoodjs/router'
import DinerLayout from 'src/layouts/DinerLayout'
import { CartProvider } from 'src/context/cart-context'

const Routes = () => {
  return (
    <Router>
      <Set wrap={[CartProvider, DinerLayout]}>
        <Route path="/" page={HomePage} name="home" />
        <Route path="/menu" page={MenuPage} name="menu" />
        <Route path="/menu/{category}" page={MenuCategoryPage} name="menuCategory" />
        <Route path="/menu/{category}/{handle}" page={ProductDetailPage} name="productDetail" />
        <Route path="/cart" page={CartPage} name="cart" />
        <Route path="/dev/configurator" page={DevConfiguratorPage} name="devConfigurator" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
