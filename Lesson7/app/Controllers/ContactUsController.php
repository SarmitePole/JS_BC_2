<?php

class ContactUsController
{
    public function index(): string
    {
        return BaseView::generate('ContactUs', 'index');
    }
}