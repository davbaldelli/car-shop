<section class="row">
    <div class="col-0 col-md-2"></div>
        <div class="col-12 col-md-8" >
            <ul class="nav nav-tabs" id="ordersTab" role="tablist">
                <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="allOrders-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">All</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="deliveredOrders-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Delivered</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="deliveringOrder-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">On transit</button>
                </li>

            </ul>
            <div class="tab-content" id="ordersTabContent" >
                <div class="tab-pane fade" id="allOrders" role="tabpanel" aria-labelledby="contact-tab">
                    <ul class="list-group list-group-flush">
                    </ul>
                </div>
                <div class="tab-pane fade show active" id="deliveredOrders" role="tabpanel" aria-labelledby="home-tab">
                    <ul class="list-group list-group-flush">
                    </ul>
                </div>
                <div class="tab-pane fade" id="deliveringOrder" role="tabpanel" aria-labelledby="profile-tab">
                    <ul class="list-group list-group-flush" >
                    </ul>
                </div>
            </div>
        </div>
    <div class="col-0 col-md-2"></div>
</section>