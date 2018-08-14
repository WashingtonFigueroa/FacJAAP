<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class Factura extends Mailable
{
    use Queueable, SerializesModels;
    /**
     * Create a new message instance.
     *
     * @return void
     */
    protected $envio;
    public function __construct($envio)
    {
        $this->envio = $envio;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->view('mail.factura', $this->envio)
            ->from('auditoriasis3930@gmail.com', 'JAAP')
            ->to($this->envio['cliente']['email'], $this->envio['cliente']['nombres'])
            ->subject('Pago de factura');
    }
}
