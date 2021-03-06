<div ng-controller="verdesuscrito">
	<div class="container-fluid inicio marginTop-setenta">
		<div class="col-md-6 inicio1">
			<h3><span id="gly" class="glyphicon glyphicon-play-circle" aria-hidden="true"></span>Lista de contactos desuscritos</h3>
		</div>
		<div class="col-md-6 inicio2">
			<p></p>
			<a ng-click="deleteAllDesuscrito()" target="_blank" class="btn btn-danger btn-sm" >Eliminar todos los contactos desuscritos</a>
		</div>
	</div>

	<div class="container">
		<div ng-controller="desuscritos as showCase" class="marginTop-treinta">
			<h3 class="text-center">{{showCase.numDesuscrito}}</h3>

			<table datatable="" dt-options="showCase.dtOptions" dt-columns="showCase.dtColumns" dt-instance="showCase.dtInstance" class="table table-striped table-hover dataTable">
			</table>
		</div>
	</div>

</div>