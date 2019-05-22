import React from 'react';

const Toolbar = () => (
	<div className="card">
		<div className="card-body">
			<form className="form-inline">
				<div className="col">
					<div className="input-group mb-3">
						<input type="text" className="form-control" placeholder="Search..." />
						<div className="input-group-append">
							<button className="btn btn-outline-secondary" type="button">Search</button>
						</div>
					</div>
				</div>
				<div className="col-1">
					<div className="input-group mb-3">
						<button className="form-control btn btn-primary">+</button>
					</div>
				</div>
			</form>
		</div>
	</div>
);

export default Toolbar;
