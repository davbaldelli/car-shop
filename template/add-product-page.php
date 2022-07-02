<div class="modal" id="successModal" tabindex="-1">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Car added successfully</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <p>The car has been added in our database.</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>
<div class="modal" id="errorModal" tabindex="-1">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">ERROR!</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <p>The car hasn't been added in our database.</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>

<div class="d-none d-md-flex col-md-2 col-xl-4"></div>
<div class="col-12 col-md-8 col-xl-4">
    <div class="row my-4">
        <div class="col">
            <h1 class="display-2 mb-1" id="adminHeader">Add new car</h1>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <form id="new-car-form" class="row needs-validation" novalidate>
                <div class="col-12">
                    <div class="form-group has-validation">
                        <label class="label-form-addcar" for="model-input">Model Name</label>
                        <input type="text" class="form-control" id="model-input" placeholder="Enter car model name" required>
                    </div>
                </div>
                <div class="col-12">
                    <div class="form-group">
                        <label class="label-form-addcar" for="brand-select">Select Brand</label>
                        <select class="form-control" id="brand-select">
                        </select>
                    </div>
                </div>
                <div class="col-12">
                    <div class="form-group has-validation">
                        <label class="label-form-addcar" for="year-input">Year</label>
                        <input type="number" class="form-control" id="year-input" placeholder="Enter car Year" required>
                    </div>
                </div>
                <div class="col-6">
                    <div class="form-group">
                        <label class="label-form-addcar" for="drivetrain-select">Select Drivetrain</label>
                        <select class="form-control" id="drivetrain-select">
                            <option value="AWD">AWD</option>
                            <option value="RWD">RWD</option>
                            <option value="FWD">FWD</option>
                        </select>
                    </div>
                </div>
                <div class="col-6">
                    <div class="form-group">
                        <label class="label-form-addcar" for="transmission-select">Select Transmission</label>
                        <select class="form-control" id="transmission-select">
                            <option value="SEQUENTIAL">Sequential</option>
                            <option value="MANUAL">Manual</option>
                        </select>
                    </div>
                </div>
                <div class="col-6">
                    <div class="form-group">
                        <label class="label-form-addcar" for="chassis-select">Select Chassis Type</label>
                        <select class="form-control" id="chassis-select">
                            <option value="convertible">Convertible</option>
                            <option value="sedan">Sedan</option>
                            <option value="coupe">Coupe</option>
                            <option value="station_wagon">Station Wagon/Estate</option>
                            <option value="van">Minivan</option>
                            <option value="suv">Suv</option>
                        </select>
                    </div>
                </div>
                <div class="col-6">
                    <div class="form-group">
                        <label class="label-form-addcar" for="engine-select">Select Fuel Type</label>
                        <select class="form-control" id="engine-select">
                            <option value="hybrid">Hybrid</option>
                            <option value="gasoline">Gasoline</option>
                            <option value="diesel">Diesel</option>
                            <option value="electric">Electric</option>
                            <option value="gpl">GPL</option>
                            <option value="methane">Methane</option>
                        </select>
                    </div>
                </div>
                <div class="col-12">
                    <div class="form-group has-validation">
                        <label class="label-form-addcar" for="image-input">Image Url</label>
                        <input type="url" class="form-control" id="image-input" placeholder="Car image url" required>
                    </div>
                </div>
                <div class="col-6">
                    <div class="form-group has-validation">
                        <label class="label-form-addcar" for="bhp-input">Horsepower</label>
                        <input type="number" class="form-control" id="bhp-input" placeholder="Car Horsepower" required>
                    </div>
                </div>
                <div class="col-6">
                    <div class="form-group has-validation">
                        <label class="label-form-addcar" for="torque-input">Torque</label>
                        <input type="number" class="form-control" id="torque-input" placeholder="Car Torque" required>
                    </div>
                </div>
                <div class="col-6">
                    <div class="form-group has-validation">
                        <label class="label-form-addcar" for="top-speed-input">Top Speed</label>
                        <input type="number" class="form-control" id="top-speed-input" placeholder="Car Top Speed" required>
                    </div>
                </div>
                <div class="col-6">
                    <div class="form-group has-validation">
                        <label class="label-form-addcar" for="weight-input">Weight</label>
                        <input type="number" class="form-control" id="weight-input" placeholder="Car Weight" required>
                    </div>
                </div>
                <div class="col-4">
                    <div class="form-group has-validation">
                        <label class="label-form-addcar" for="price-input">Price</label>
                        <input type="number" class="form-control" id="price-input" placeholder="Car Price" required>
                    </div>
                </div>
                <div class="col-4">
                    <div class="form-group has-validation">
                        <label class="label-form-addcar" for="doors-input">Doors</label>
                        <input type="number" class="form-control" id="doors-input" placeholder="Car Doors" required>
                    </div>
                </div>
                <div class="col-4">
                    <div class="form-group has-validation">
                        <label class="label-form-addcar" for="rating-input">Rating</label>
                        <input type="number" class="form-control" id="rating-input" placeholder="Car Rating" max="5" min="1" required>
                    </div>
                </div>
                <div class="col-12 pt-3 mt-3">
                    <div class="d-flex">
                        <button id="add-prod-submit" type="submit" class="btn btn-cs flex-fill">Submit</button>
                    </div>
                </div>
            </form>
        </div>

    </div>

</div>
