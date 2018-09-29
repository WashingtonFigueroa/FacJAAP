
<h1>Mensaje</h1>
<p>
    Estimado usuario:  {{ $cliente->nombres }} <br>
    Le informamos que ha sido registrado el pago del consumo del consumo de Agua Potable con;<br><br>
    N. Factura:  {{$idfactura}} <br>
    Tarifa: {{$tarifa}} <br>
    Multa: {{$multa}} <br>
    Total a pagar: {{$total}} <br>
    <br>
<hr>
<br>
   <table>
    <tr>
        <td>Servicio : {{$lectura->idservicio}}</td>
        <td>Anterior : {{$lectura->anterior}}</td>
        <td>Actual : {{$lectura->actual}}</td>
        <td>Consumo : {{$lectura->consumo}}</td>
        <td>Excedente : {{$lectura->excedente}}</td>
    </tr>
</table>
</p>

